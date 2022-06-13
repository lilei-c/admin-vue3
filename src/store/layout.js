import { defineStore, storeToRefs } from 'pinia'

export const useStore = defineStore('layout', {
    state: () => {
        return {
            // 菜单
            menuCollapsed: false, // collapsed 坍塌
            selectedKeys: [],
            // tabs导航
            tabs: [],
            activeTab: '', // 这里和菜单区分开, 因为 tabs 和菜单可能不一致; 比如 :id 这种路由, 
        }
    },
    actions: {
        toggleMenuCollapsed() {
            this.menuCollapsed = !this.menuCollapsed
        },
        addTab(data) {
            if (!this.tabs.some(x => x.path == data.path))
                this.tabs.push(data)
            this.activeTab = data.path
        },
        delTab(data) {
            this.tabs = this.tabs.filter(x => x.path != data)
        },
    }
})

export const useStoreRefs = () => storeToRefs(useStore())