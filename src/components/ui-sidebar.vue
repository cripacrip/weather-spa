<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      Weather
    </div>
    <nav class="sidebar__navigation">
      <!-- <router-link
        :to="{ name: ROUTERS_NAME.home }"
        class="sidebar__navigation-link"
      >
        <span>
          Home
        </span>
      </router-link> -->
      <router-link
        :to="{ name: ROUTERS_NAME.dashboard }"
        class="sidebar__navigation-link"
      >
        <span>
          Weather
        </span>
      </router-link>
      <!-- <router-link
        :to="{ name: ROUTERS_NAME.cities }"
        class="sidebar__navigation-link"
      >
        <span>
          Cities
        </span>
      </router-link>
      <router-link
        :to="{ name: ROUTERS_NAME.map }"
        class="sidebar__navigation-link"
      >
        <span>
          Map
        </span>
      </router-link>
      <router-link
        :to="{ name: ROUTERS_NAME.settings }"
        class="sidebar__navigation-link"
      >
        <span>
          Settings
        </span>
      </router-link> -->
    </nav>
  </div>
</template>

<script setup lang="ts">
// import { useRouter } from 'vue-router';

import { ROUTERS_NAME } from '@/routes'

// const router = useRouter();
</script>

<style lang="scss" scoped>
.sidebar {
  width: 180px;
  flex-grow: 0;
  padding: 48px 16px;
  background-color: var(--sidebar-bg);
  display: flex;
  flex-direction: column;
}
.sidebar__navigation {
  display: grid;
  gap: 16px;
}
.sidebar__navigation-link {
  color: #000;
  border-radius: 4px;
  padding: 12px 16px;
  transition: opacity .15s ease-out;

  span {
    opacity: .7;
  }

  &:hover {
    background-color: #c2c2c2;
  }

  &.router-link-active {
    font-weight: 500;
    background-color: #c9c9;
    color: #c353;

    span {
      opacity: 1;
    }
  }
}
.sidebar__logo {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  margin-bottom: 40px;
  color: #000;
}
</style>
