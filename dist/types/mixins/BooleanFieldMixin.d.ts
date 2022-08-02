import { ILktObject } from "lkt-tools";
export declare const BooleanFieldMixin: {
    emits: string[];
    props: {
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        state: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        valid: {
            type: (FunctionConstructor | BooleanConstructor)[];
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        emptyLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): ILktObject;
    computed: {
        isValid(): any;
        changed(): boolean;
        canRenderLabelSlot(): boolean;
        canRenderLabelHtml(): boolean;
    };
    watch: {
        modelValue(v: string): void;
    };
    methods: {
        focus(): void;
        setIsDisabled(status?: boolean): any;
        isDisabled(): any;
        getValue(): any;
    };
};