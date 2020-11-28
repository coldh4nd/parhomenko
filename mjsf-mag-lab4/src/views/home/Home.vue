<template>
    <div>
        <page-header />
        <!-- <p>Modal dialog with activator</p> -->
        <b-modal
            close-btn
            size="xs"
            title="My title"
            @click:outside="showModal = false"
        >
            <template slot="title" slot-scope="scope"
                >{{ scope.title }} {{ scope.visible }}</template
            >
            <template #footer="scope">
                <button class="btn btn-primary" @click="scope.close">
                    Close
                </button>
            </template>
            <!-- Modal with activator
            <template #activator="{on}">
                <button class="btn btn-primary" @click="on">Open</button>
            </template> -->
        </b-modal>
        <hr />
        <!-- <p>Modal dialog with model</p>
        <b-modal
            v-model="showModal"
            close-btn
            size="xs"
            title="My title"
            @click:outside="showModal = false"
        >
            Modal with model
        </b-modal>

        <button
            type="button"
            class="btn btn-primary"
            @click="showModal = !showModal"
        >
            Launch demo modal
        </button> -->
        <div class="form-group">
            <label for="exampleFormControlInput1">Type alert text</label>
            <input
                v-model="alertText"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
            />
        </div>
        <div class="form-group">
            <label for="exampleFormControlSelect1">Select alert type</label>
            <select
                v-model="selectedAlertType"
                class="form-control"
                id="exampleFormControlSelect1"
            >
                <option
                    v-for="(type, index) in alertTypes"
                    :key="index"
                    :value="type"
                    >{{ type }}</option
                >
            </select>
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1"
                >Select alert close time</label
            >
            <input
                v-model="alertCloseTime"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
            />
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
                v-model="activateEvents"
            />
            <label class="form-check-label" for="defaultCheck1">
                Show hide/show events
            </label>
        </div>
        <b-alert
            :text="'test'"
            :type="selectedAlertType"
            :closeTime="+alertCloseTime"
            :activateEvents="activateEvents"
        >
            <template #activator="{on}">
                <button class="btn btn-primary" @click="on">Show Alert</button>
            </template>
        </b-alert>
    </div>
</template>

<script>
import BModal from '../../components/bootstrap/BModal';
import BAlert from '../../components/bootstrap/BAlert';
import PageHeader from './PageHeader';

export default {
    name: 'Home',
    components: { PageHeader, BModal, BAlert },
    data() {
        return {
            showModal: false,
            showAlert: false,
            activateEvents: false,
            alertText: 'Test text',
            selectedAlertType: 'success',
            alertCloseTime: 1000,
            alertTypes: ['success', 'danger', 'warning', 'info'],
        };
    },
};
</script>
