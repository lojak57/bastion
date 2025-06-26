<script lang="ts">
  export let data: any = {};
  export let updateData: (newData: any) => void;
  
  const techLevelOptions = [
    { 
      value: 'you-choose', 
      label: "Nope, I need you to choose",
      desc: "Trust the experts" 
    },
    { 
      value: 'some-ideas', 
      label: "I've got a few ideas",
      desc: "Open to suggestions" 
    },
    { 
      value: 'opinionated', 
      label: "Yes — I'm opinionated",
      desc: "I know what I want" 
    },
    { 
      value: 'specific', 
      label: "I need it built in...",
      desc: "Specific requirements" 
    }
  ];
  
  const commonStacks = [
    'React/Next.js',
    'Vue/Nuxt',
    'Svelte/SvelteKit',
    'React Native',
    'Flutter',
    'Node.js',
    'Python/Django',
    'Ruby on Rails',
    'Other'
  ];
</script>

<div class="space-y-6">
  <div>
    <h2 class="text-2xl font-bold mb-2">Step 5: Stack/Tech Level</h2>
    <p class="text-stone-gray-400">Do you already know what stack or tools you want to use?</p>
  </div>
  
  <div class="space-y-3">
    {#each techLevelOptions as option}
      <label class="flex items-start p-4 bg-fortress-gray-800 border-2 border-fortress-gray-700 cursor-pointer hover:border-steel-blue-400 transition-colors {data.techLevel === option.value ? 'border-steel-blue-400 bg-fortress-gray-700' : ''}">
        <input
          type="radio"
          name="techLevel"
          value={option.value}
          checked={data.techLevel === option.value}
          on:change={() => updateData({ techLevel: option.value })}
          class="mt-1 mr-3 cursor-pointer relative z-10"
        />
        <div>
          <p class="font-semibold">{option.label}</p>
          <p class="text-sm text-stone-gray-400">{option.desc}</p>
        </div>
      </label>
    {/each}
  </div>
  
  {#if data.techLevel === 'specific'}
    <div>
      <label for="specificStack" class="block text-sm font-medium mb-2">
        Which stack?
      </label>
      <select
        id="specificStack"
        value={data.specificStack || ''}
        on:change={(e) => updateData({ specificStack: e.currentTarget.value })}
        class="w-full px-4 py-3 bg-fortress-gray-800 border border-fortress-gray-700 text-off-white focus:border-steel-blue-400 focus:outline-none relative z-10"
      >
        <option value="">Select a stack</option>
        {#each commonStacks as stack}
          <option value={stack}>{stack}</option>
        {/each}
      </select>
    </div>
  {/if}
</div>