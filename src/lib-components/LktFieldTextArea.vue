<template>
    <div class="is-textarea"
         v-bind:class="classes"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-labeled="canRenderLabelHtml"
    >
        <slot name="prefix"></slot>
        <template v-if="placeholder">
            <textarea
                v-model="value"
                v-bind:name="name"
                v-bind:id="Identifier"
                v-bind:disabled="disabled"
                v-bind:readonly="readonly"
                v-bind:placeholder="placeholder"
            ></textarea>
        </template>
        <template v-else>
            <textarea
                v-model="value"
                v-bind:name="name"
                v-bind:id="Identifier"
                v-bind:disabled="disabled"
                v-bind:readonly="readonly"
            ></textarea>
        </template>
        <slot v-if="canRenderLabelSlot" name="label"></slot>
        <label v-if="canRenderLabelHtml" :for="Identifier" v-html="label"></label>

        <lkt-field-state
            v-if="showInfoUi"
            v-bind:state-config-value="stateConfigValue"
            v-bind:state-texts-value="stateTextValue"
            v-on:click-ui="onClickUi"
        ></lkt-field-state>
    </div>
</template>

<script lang="ts">
import {LktFieldStateMixin} from "../mixins/LktFieldStateMixin";
import lktFieldState from "../components/LktFieldState.vue";
import {TextFieldMixin} from "../mixins/TextFieldMixin";

export default {
    name: "LktFieldTextArea",
    components: {lktFieldState},
    mixins: [TextFieldMixin, LktFieldStateMixin],
}
</script>