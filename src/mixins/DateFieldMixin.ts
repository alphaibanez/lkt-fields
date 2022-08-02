import {generateRandomString, ILktObject, isFunction, slotProvided} from "lkt-tools";

export const DateFieldMixin = {
    emits: ['update:modelValue'],
    props: {
        modelValue: {type: [String, Date], default: '',},
        disabledDates: {type: Array, default: (): Array<any> => []},
        utc: {type: Boolean, default: false},
        multiDates: {type: Boolean, default: false},
        inline: {type: Boolean, default: false},
        monthPicker: {type: Boolean, default: false},
        timePicker: {type: Boolean, default: false},
        weekPicker: {type: Boolean, default: false},
        yearPicker: {type: Boolean, default: false},
        preventMinMaxNavigation: {type: Boolean, default: false},
        range: {type: Boolean, default: false},
        autoRange: {type: [Number, String], default: (): null => null},
        multiCalendars: {type: [Boolean, Number, String], default: (): null => null},
        flow: {type: Array, default: (): null => null},
        presetRanges: {type: Array, default: (): Array<any> => []},
        minDate: {type: [Date, String], default: (): null => null},
        maxDate: {type: [Date, String], default: (): null => null},
        placeholder: {type: String, default: ''},
        label: {type: String, default: ''},
        state: {type: String, default: ''},
        name: {type: String, default: generateRandomString(16)},
        valid: {type: [Boolean, Function], default: false,},
        disabled: {type: Boolean, default: false,},
        readonly: {type: Boolean, default: false,},
        emptyLabel: {type: Boolean, default: false,},
    },
    data(): ILktObject {
        return {
            Identifier: generateRandomString(16),
            originalValue: this.modelValue,
            value: this.modelValue,
        }
    },
    computed: {
        isValid() {
            if (isFunction(this.valid)) {
                return this.valid();
            }
            return this.valid;
        },
        isEmpty() {
            return !this.value;
        },
        changed() {
            return this.value !== this.originalValue;
        },
        canRenderLabelSlot() {
            return slotProvided(this, 'label');
        },
        canRenderLabelHtml() {
            if (this.canRenderLabelSlot) {
                return false;
            }
            if (!this.label && this.emptyLabel) {
                return true;
            }
            return !!this.label;
        }
    },
    watch: {
        modelValue(v: any) {
            this.value = v;
            console.log('Updated modelValue', v);
        },
        value(v: any) {
            console.log('Updated value', v);
            this.$emit('update:modelValue', v)
        }
    },
    methods: {
        focus() {
            this.$nextTick(() => {
                this.$refs.input.focus();
            });
        },
        setIsDisabled(status: boolean = false) {
            this.disabled = status === true;
            return this;
        },
        isDisabled() {
            return this.disabled;
        },

        reset() {
            this.modelValue = this.originalValue;
        },

        getValue() {
            return this.modelValue;
        },

    },
}