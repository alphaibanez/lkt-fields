<template>
    <div class="is-date"
         v-bind:class="classes"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-labeled="canRenderLabelHtml"
    >
        <slot name="prefix"></slot>

        <Datepicker v-model="value"
                    v-bind:uid="Identifier"
                    v-bind:disabled="disabled"
                    v-bind:name="name"
                    v-bind:range="range"
                    v-bind:auto-range="autoRange"
                    v-bind:multi-calendars="multiCalendars"
                    v-bind:month-picker="monthPicker"
                    v-bind:time-picker="timePicker"
                    v-bind:inline="inline"
                    v-bind:multi-dates="multiDates"
                    v-bind:flow="flow"
                    v-bind:utc="utc"
                    v-bind:week-picker="weekPicker"
                    v-bind:year-picker="yearPicker"
                    v-bind:preset-ranges="presetRanges"
                    v-bind:disabled-dates="disabledDates"
                    v-bind:min-date="minDate"
                    v-bind:max-date="maxDate"
                    v-bind:prevent-min-max-navigation="preventMinMaxNavigation"
        ></Datepicker>
        <slot v-if="canRenderLabelSlot" name="label"></slot>
        <label v-if="canRenderLabelHtml" :for="Identifier" v-html="label"></label>

        <lkt-field-state
            v-if="showInfoUi"
            v-bind:state-config-value="stateConfigValue"
            v-bind:state-texts-value="stateTextValue"
            @click-ui="onClickUi"
        ></lkt-field-state>
    </div>
</template>

<script lang="ts">
import lktFieldState from "../components/LktFieldState.vue";
import {LktFieldStateMixin} from "../mixins/LktFieldStateMixin";
import {DateFieldMixin} from "../mixins/DateFieldMixin";

export default {
    name: "LktFieldDate",
    components: {lktFieldState},
    mixins: [DateFieldMixin, LktFieldStateMixin],
}
</script>