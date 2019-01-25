module.exports = {
    data() {
        return {
            name: 'Click here'
        }
    },

    methods: {
        generateName() {
            this.name = 'New name';
        }
    },

    template: `
        <label> Your new id:
            <button id="btn-main" v-on:click="generateName">{{ name }}</button>
        </label>
    `
};
