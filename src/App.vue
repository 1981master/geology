<template>
  <div id="app" class="d-flex flex-column" style="height: 100vh;">
    <!-- Navbar -->
    <navbarComponent />

    <!-- Main area: Sidebar + Content -->
    <div class="d-flex flex-grow-1">
      <!-- Sidebar -->
      <SidebarComponent
        v-if="isSidebarOpen"
        @toggle="isSidebarOpen = false"
        class="flex-shrink-0"
      />

      <!-- Content -->
      <div class="flex-grow-1 overflow-auto px-3">
        <!-- Show Menu button (when sidebar hidden) -->
        <div v-if="!isSidebarOpen" class="my-2">
          <button class="btn btn-primary" @click="isSidebarOpen = true">
            ☰ Show Menu
          </button>
        </div>

        <!-- Card wrapping Tabs -->
        <CardComponent headerText="My Tabs" :showHeader="true" :showFooter="false">
          <!-- TabsComponent inside card -->
          <TabsComponent
            :tabs="tabs"
            size="lg"
            border="none"
            color="primary"
            @tab-changed="handleTabChange"
          >
            <!-- Tab 0 -->
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

            <!-- Tab 1 -->
            <template #pane-1>
              <div class="row">
                <div class="col-12">
                  <CardComponent headerText="Card 2 in Tab 2" class="mb-3">
                    <p>Content of card 2 in second tab.</p>
                  </CardComponent>
                </div>
              </div>
            </template>

            <!-- Tab 2 -->
            <template #pane-2>
              <div class="row">
                <div class="col-12">
                  <CardComponent headerText="Card 3 in Tab 3" class="mb-3">
                    <p>Content of card 3 in third tab.</p>
                  </CardComponent>
                </div>
              </div>
            </template>
          </TabsComponent>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "./components/View/card.vue";
import navbarComponent from "./components/View/navbar.vue";
import SidebarComponent from "./components/View/sidebarComponent.vue";
import TabsComponent from "./components/View/TabsComponent.vue";

export default {
  name: "App",
  components: {
    navbarComponent,
    TabsComponent,
    CardComponent,
    SidebarComponent,
  },
  data() {
    return {
      isSidebarOpen: true,
      tabs: [
        { title: "Tab 1", key: "tab1" },
        { title: "Tab 2", key: "tab2" },
        { title: "Tab 3", key: "tab3" },
        { title: "Tab 4", key: "tab4" },
      ],
    };
  },
  methods: {
    handleTabChange(tab) {
      console.log("Active tab changed to:", tab);
    },
  },
};
</script>

