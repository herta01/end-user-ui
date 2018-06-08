<template>
    <div>
        <template v-for="activityGroup in activityGroups">
            <fr-list-group> 
                <div class="card-body m-0 py-4" slot="list-group-header">
                    <h6 class="card-title mb-0">{{formatDateTitle(activityGroup.day)}}</h6>
                </div>
                <fr-list-item
                    v-for="activity in activityGroup.activities"
                    :key="activity._id"
                    :collapsible="false"
                    :panelShown="false"
                    :hoverItem="false">
                    <template slot="list-item-header" class="d-inline-flex w-100">
                        <div class="flex-grow-1 media-body">
                            <span class="activity-type">{{$t(`pages.uma.activity.${activity.type}`)}}</span>
                            <button class="m-0 p-0 btn btn-link text-capitalize" type="button" @click="$emit('resourceSetClick', activity._id)">{{activity.resourceSetName}}</button>
                            <small class="d-block text-muted subtext">{{formatTime(activity.eventTime)}}</small>
                        </div>
                        <fr-fallback-image v-if="activity.icon_url" :src="activity.icon_url" height="30" width="30" fallback="fa-image"></fr-fallback-image>
                    </template>
                </fr-list-item>
            </fr-list-group>
        </template>
    </div>
</template>

<script>
    import _ from 'lodash';
    import moment from 'moment';
    import ListGroup from '@/components/utils/ListGroup';
    import ListItem from '@/components/utils/ListItem';
    import FallbackImage from '@/components/utils/FallbackImage';

    export default {
        name: 'Uma-Activity',
        components: {
            'fr-list-group': ListGroup,
            'fr-list-item': ListItem,
            'fr-fallback-image': FallbackImage
        },
        props: {
            umaHistory: {
                required: true,
                type: Array
            }
        },
        data () {
            let sortedHistory = this.umaHistory.sort((a, b) => a.eventTime - b.eventTime).reverse(),
                groups = _.groupBy(sortedHistory, (event) => {
                    return moment(event.eventTime).format('YYYY-MM-DD');
                }),
                activityGroups = _.keys(groups).map((day) => {
                    return { day, activities: groups[day] };
                }),
                sortedActivityGroups = _.sortBy(activityGroups, ({day}) => {
                    return moment(day);
                }).reverse();

            return {
                activityGroups: sortedActivityGroups
            };
        },
        methods: {
            formatDateTitle (dateString) {
                return moment(dateString).format('dddd, MMMM DD, YYYY');
            },
            formatTime (dateString) {
                let eventDate = moment(dateString);

                if (eventDate.isSame(moment(), 'day')) {
                    return eventDate.fromNow();
                } else {
                    return eventDate.format('LT');
                }
            }
        }
    };
</script>