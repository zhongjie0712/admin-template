<template>
  <div>
    <el-tabs class="tabs" v-model="editableTabsValue" type="card" @edit="handleTabsEdit">
      <el-tab-pane
        :key="item.name"
        v-for="(item, index) in editableTabs"
        :label="item.title"
        :name="item.name"
        :closable="item.name!='1'"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content"
        },
        {
          title: "Tab 3",
          name: "3",
          content: "Tab 3 content"
        },
        {
          title: "Tab 4",
          name: "4",
          content: "Tab 4 content"
        },
        {
          title: "Tab 5",
          name: "5",
          content: "Tab 5 content"
        },
        {
          title: "Tab 6",
          name: "6",
          content: "Tab 6 content"
        },
        {
          title: "Tab 7",
          name: "7",
          content: "Tab 4 content"
        },
        {
          title: "Tab 8",
          name: "8",
          content: "Tab 8 content"
        },
        {
          title: "Tab 9",
          name: "9",
          content: "Tab 9 content"
        },

        {
          title: "Tab 10",
          name: "10",
          content: "Tab 10 content"
        },
        {
          title: "Tab 11",
          name: "11",
          content: "Tab 11 content"
        },
        {
          title: "Tab 12",
          name: "12",
          content: "Tab 12 content"
        },
        {
          title: "Tab 13",
          name: "13",
          content: "Tab 13 content"
        },
        {
          title: "Tab 14",
          name: "14",
          content: "Tab 14 content"
        },
        {
          title: "Tab 15",
          name: "15",
          content: "Tab 15 content"
        }
      ],
      tabIndex: 2
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content"
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs {
  // width: calc(100vw - 350px);
}
</style>