<style scoped>

</style>
<template>
    <div style="background-color: red;">
        <data-grid :columns="columns"  :data="data" :queryParams="queryParams"></data-grid>
    </div>
</template>
<script>
    import DataGrid from '../../node_modules/iview-smart/src/components/data-grid/data-grid';

    export default {
        components: {DataGrid},
        data(){
            return {
                queryParams:{},
                columns:[
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '是否默认',
                        key: 'is_default'
                    }
                ],
                data: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            };
        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    };
</script>