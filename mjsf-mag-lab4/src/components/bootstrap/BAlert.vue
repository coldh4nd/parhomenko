<template>
    <div>
        <slot name="activator" :on="on"></slot>
        <div
            v-if="showAlert"
            :class="'alert alert-' + type + ' alert-dismissible fade show'"
            role="alert"
        >
            <slot name="text" :text="text">{{ text }}</slot>
            <slot name="hide" :close="close">
                <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    @click="close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BAlert',
    model: {
        prop: 'visible',
        event: 'change',
    },
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: '',
        },
        closeTime: {
            type: Number,
            default: 1000,
        },
        activateEvents: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            showAlert: this.visible,
        };
    },
    beforeDestroy() {},
    watch: {
        visible: function (newValue, oldValue) {
            if (!oldValue) {
                this.$emit('alert:shown');
            }
            if (oldValue) {
                this.$emit('alert:hidden');
            }
            this.showAlert = newValue;
        },
    },
    methods: {
        close() {
            if (this.activateEvents) {
                alert('Before hide event');
            }
            this.$emit('change', false);
            this.showAlert = false;
        },
        on() {
            if (this.activateEvents) {
                alert('Before shown event');
            }
            this.$emit('change', true);
            this.showAlert = true;
            setTimeout(() => this.close(), this.closeTime);
        },
    },
};
</script>

<style scoped></style>
