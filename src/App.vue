<template>
  <div id="app">
    <navbarComponent />

    <div class="container-fluid px-3">
      <TabsComponent
        :tabs="tabs"
        size="lg"
        border="none"
        color="primary"
        @tab-changed="handleTabChange"
      >
        <!-- Tab 0 content -->
        <template #pane-0>
          <div class="row">
            <div class="col-12">
              <CardComponent
                headerText="Card 1 in Tab 1"
                title="Card Title"
                body="This is the main content"
                footerText="Footer text here"
                border="null"
                textColor="dark"
                headerBg="none"
                footerBg="null"
                :showHeader="true"
                :showFooter="false"
              />
            </div>
          </div>
        </template>

        <!-- Tab 1 content -->
        <template #pane-1>
          <div class="row">
            <div class="col-12">
              <CardComponent
                headerText="Card 2 in Tab 2"
                class="mb-3"
              >
                <p>Content of card 2 in second tab.</p>
              </CardComponent>
            </div>
          </div>
        </template>

        <!-- Tab 2 content -->
        <template #pane-2>
          <div class="row">
            <div class="col-12">
              <CardComponent
                headerText="Card 3 in Tab 3"
                class="mb-3"
              >
                <p>Content of card 3 in third tab.</p>
              </CardComponent>
            </div>
          </div>
        </template>
      </TabsComponent>
    </div>
  </div>
</template>

<script>
import CardComponent from './components/View/card.vue'
import navbarComponent from './components/View/navbar.vue'
import TabsComponent from './components/View/TabsComponent.vue'

export default {
  name: 'App',
  components: {
    navbarComponent,
    TabsComponent,
    CardComponent,
  },
  data() {
    return {
      tabs: [
        { title: 'Tab 1', key: 'tab1' },
        { title: 'Tab 2', key: 'tab2' },
        { title: 'Tab 3', key: 'tab3' },
      ],
    }
  },
  methods: {
    handleTabChange(tab) {
      console.log('Active tab changed to:', tab)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
