<template>
    <div>
        <slot name="activator" :on="on"></slot>
        <div
            :class="{ 'show d-block modal-open': showModal }"
            class="modal fade"
            role="dialog"
        >
            <div
                class="modal-dialog modal-dialog-centered"
                :class="'modal-' + size"
                role="document"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">
                            <slot name="title" :title="title">{{ title }}</slot>
                        </h5>
                        <button
                            v-if="closeBtn"
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            @click="close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot #default></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer" :close="close">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                                @click="close"
                            >
                                Close
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show" @click="clickOutside"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BModal',
    model: {
        prop: 'visible',
        event: 'change',
    },
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        closeBtn: {
            type: Boolean,
            default: true,
        },
        size: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            showModal: this.visible,
        };
    },
    watch: {
        visible: function (newValue, oldValue) {
            if (!oldValue) {
                this.$emit('modal:opened');
            }
            if (oldValue) {
                this.$emit('modal:closed');
            }
            this.showModal = newValue;
        },
    },
    methods: {
        close() {
            this.$emit('change', false);
            this.showModal = false;
        },
        clickOutside() {
            this.$emit('click:outside');
        },
        on() {
            this.$emit('change', true);
            this.showModal = true;
        },
    },
};
</script>

<style scoped>
.modal-dialog {
    z-index: 1073;
}
</style>
