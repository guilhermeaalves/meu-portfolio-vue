<template>
  <button class="gradient-btn" @click="$emit('click')">
    <span class="gradient-bg" />
    <span class="btn-content">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.gradient-btn {
  position: relative;
  display: inline-flex;
  height: 3rem; /* h-12 */
  width: 100%;
  margin-top: 2.5rem; /* md:mt-10 */
  overflow: hidden;
  border-radius: 0.5rem; /* rounded-lg */
  padding: 1px; /* p-[1px] */
  outline: none; /* focus:outline-none */
}

@media (min-width: 768px) {
  .gradient-btn {
    width: 15rem; /* md:w-60 */
  }
}

.gradient-bg {
  position: absolute;
  inset: -1000%; /* inset-[-1000%] */
  animation: spin 2s linear infinite;
  background: conic-gradient(
    from 90deg at 50% 50%,
    #e2cbff 0%,
    #393bb2 50%,
    #e2cbff 100%
  );
}

.btn-content {
  display: inline-flex;
  height: 100%;
  width: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem; /* rounded-lg */
  background-color: #020617; /* bg-slate-950 */
  padding-left: 1.75rem; /* px-7 */
  padding-right: 1.75rem;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: white;
  backdrop-filter: blur(8px); /* backdrop-blur-3xl */
  gap: 0.5rem; /* gap-2 */
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
