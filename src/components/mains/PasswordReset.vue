<template>
    <fr-center-card v-if="selfServiceType !== null && selfServiceType !== 'parameters'" :showLogo="true">
        <div slot="center-card-header">
            <h2 class="h2">{{$t(`pages.selfservice.headers.reset.title`)}}</h2>
        </div>

        <b-card-body slot="center-card-body">
            <component ref="selfServiceStage"
                :is="selfServiceType"
                :selfServiceDetails="selfServiceDetails"
                @advanceStage="advanceStage"
                :apiType="apiType">
            </component>
        </b-card-body>

        <b-card-footer slot="center-card-footer">
            <b-link href="#/login">{{$t("pages.selfservice.signIn")}}</b-link>
        </b-card-footer>
    </fr-center-card>

    <b-container fluid class="h-100 px-0"  v-else>
        <div class="h-100 d-flex">
            <div class="m-auto fr-center-card">
                <bounce-loader :color="loadingColor"></bounce-loader>
            </div>
        </div>
    </b-container>
</template>

<script>
    import styles from '@/scss/main.scss';
    import { BounceLoader } from 'vue-spinner/dist/vue-spinner.min.js';
    import Captcha from '../selfservice/common/Captcha';
    import CenterCard from '@/components/utils/CenterCard';
    import EmailValidation from '../selfservice/common/EmailValidation';
    import ResetStage from '../selfservice/passwordreset/ResetStage';
    import KbaVerification from '../selfservice/passwordreset/KbaVerification';
    import SelfserviceAPI from '../selfservice/mixins/SelfserviceAPIMixin';
    import UserQuery from '../selfservice/common/UserQuery';
    import GenericSelfService from '../selfservice/common/GenericSelfService';
    import _ from 'lodash';

    /**
     * @description Selfservice controlling component for recovering a lost password. Makes use of selfservice-reset.json config file.
     *
     * @mixin - selfservice/mixins/SelfserviceAPIMixin.vue
     */
    export default {
        name: 'Password-Reset',
        components: {
            Captcha,
            EmailValidation,
            UserQuery,
            ResetStage,
            kbaSecurityAnswerVerificationStage: KbaVerification,
            GenericSelfService,
            'bounce-loader': BounceLoader,
            'fr-center-card': CenterCard
        },
        data () {
            return {
                selfServiceType: null,
                selfServiceDetails: null,
                loadingColor: styles.baseColor,
                apiType: 'reset'
            };
        },
        mounted () {
            /* istanbul ignore next */
            if (this.$route.params.queryParams) {
                let queryParams = this.parseQueryParams(this.$route.params.queryParams);

                this.advanceStage(queryParams);
            } else {
                this.loadData();
            }
        },
        methods: {
            setChildComponent (type, details) {
                this.selfServiceDetails = details;

                if (type === 'parameters') {
                    this.selfServiceType = null;
                    this.advanceStage({});
                } else {
                    let stageCheck = false;

                    _.each(this.$options.components, (value, key) => {
                        if (_.toLower(key) === _.toLower(type)) {
                            stageCheck = true;
                        }
                    });

                    if (stageCheck) {
                        this.selfServiceType = type;
                    } else {
                        this.selfServiceType = 'GenericSelfService';
                    }
                }
            },
            apiErrorCallback (error) {
                this.setChildComponent('resetStage', { error: error.response.data.message });
            }
        },
        mixins: [
            SelfserviceAPI
        ]
    };
</script>
