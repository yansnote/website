<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/Logo.svg" alt="Yan's Note">
      </router-link>
    </div>

    <div class="navigation">
      <nav>
        <li class="nav-me">
          <router-link to="/">Me</router-link>
        </li>
        <li class="nav-portfolio">
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
        <li class="nav-blog">
          <a href="https://mhatsu.to/author/0/" target="_blank">Blog</a>
        </li>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    a {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  .navigation {
    nav {
      display: flex;
      flex-direction: row;

      li {
        list-style: none;
        margin: 5px 8px;

        a {
          text-decoration: none;
          padding: 5px;
          display: block;

          &:hover {
            border-width: 0;
            border-style: solid;
            border-bottom-width: 2px;
            padding-bottom: 3px;
          }
        }
      }

      .nav-me {
        a {
          color: var(--yellow-color);
        }
      }
      .nav-portfolio {
        a {
          color: var(--teal-color);
        }
      }
      .nav-blog {
        a {
          color: var(--orange-color);
        }
      }
    }
  }
}
</style>
