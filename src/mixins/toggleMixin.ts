interface Props {
    show: boolean
}

export default {
    props: {
        show: {
            type: Boolean,
            default: false
        } as unknown as Props
    } ,
    methods: {
        closeModal(): void {
            this.$emit('update:show', false)
        }
    },
    mounted() {
        
    },
}