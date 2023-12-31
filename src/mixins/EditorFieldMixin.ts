import {TextFieldMixin} from "./TextFieldMixin";
import {LktFieldStateMixin} from "./LktFieldStateMixin";
import {DEFAULT_EDITOR_BUTTONS} from "../constants";
import {LktObject} from "lkt-ts-interfaces";
import {FieldClassesMixin} from "./styling/FieldClassesMixin";
import {StateConfigValue} from "../value-objects/StateConfigValue";
import {StateTextValue} from "../value-objects/StateTextValue";

export const EditorFieldMixin = {
    mixins: [TextFieldMixin, LktFieldStateMixin, FieldClassesMixin],
    props: {
        lang: {type: String, default: 'en'},
        editorOptions: {
            type: Object, default() {
                return {buttonList: DEFAULT_EDITOR_BUTTONS};
            }
        }
    },
    data(): LktObject {
        return {
            editor: undefined,
            timeout: undefined,
            stateConfigValue: new StateConfigValue(this.stateConfig, this.disabled || this.readonly),
            stateTextValue: new StateTextValue(this.stateTexts),
        };
    },
    watch: {
        disabled() {
            if (this.editor) {
                this.updateEditorDisabled();
            }
        }
    },
    methods: {
        storeEditorValue(content: string) {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(() => { this.value = content; }, 300);
        },
        updateEditorDisabled() {
            if (this.disabled) {
                this.editor.disabled();
            } else {
                this.editor.enabled();
            }
        }
    }
}