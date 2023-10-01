<template>
  <ul
    class="mx-4 flex flex-row items-center justify-center gap-1 rounded-lg border-0 font-medium md:gap-4"
  >
    <li>
      <nuxt-link to="/about" class="header-link" title="About the MLPDS">
        <div class="header-small-icon">
          <font-awesome-icon :icon="['fa', 'circle-info']" />
        </div>
        <div class="block">About</div>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link
        to="/guides/"
        class="header-link"
        aria-current="page"
        title="Drawing guides"
      >
        <div class="header-small-icon">
          <font-awesome-icon :icon="['fa', 'book']" />
        </div>
        <div class="block">Guides</div>
      </nuxt-link>
    </li>
    <li>
      <a
        href="https://www.reddit.com/r/MLPdrawingschool/wiki/biweekly"
        target="_blank"
        class="header-link"
        title="Drawing challanges"
      >
        <div class="header-small-icon">
          <font-awesome-icon :icon="['fa', 'hat-cowboy-side']" />
        </div>
        <div class="block">Challenges</div>
      </a>
    </li>
    <li>
      <nuxt-link
        to="/prompts"
        class="header-link"
        title="Drawing prompt generator"
      >
        <div class="header-small-icon">
          <font-awesome-icon :icon="['fa', 'dice']" />
        </div>
        <div class="block">Prompt Generator</div>
      </nuxt-link>
    </li>
  </ul>
</template>
