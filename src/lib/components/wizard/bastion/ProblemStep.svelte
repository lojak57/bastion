<script lang="ts">
  export let data: any = {};
  export let updateData: (newData: any) => void;
  
  const handleChange = (field: string, value: any) => {
    updateData({ [field]: value });
  };
  
  const targetMarkets = [
    { value: 'b2b', label: 'B2B' },
    { value: 'b2c', label: 'B2C' },
    { value: 'saas', label: 'SaaS' },
    { value: 'marketplace', label: 'Marketplace' },
    { value: 'other', label: 'Other' }
  ];
</script>

<div class="space-y-6">
  <div>
    <h2 class="text-2xl font-bold mb-2">Step 2: The Problem</h2>
    <p class="text-stone-gray-400">What pain are you solving, and for who?</p>
  </div>
  
  <div>
    <label for="problem" class="block text-sm font-medium mb-2">
      Describe the problem you're solving <span class="text-steel-blue-400">*</span>
    </label>
    <textarea
      id="problem"
      value={data.problem || ''}
      on:input={(e) => handleChange('problem', e.currentTarget.value)}
      placeholder="Example: Small contractors lose 30% of profits to poor project tracking. They use spreadsheets and texts, leading to missed deadlines and cost overruns..."
      rows="4"
      class="w-full px-4 py-3 bg-fortress-gray-800 border border-fortress-gray-700 text-off-white placeholder-stone-gray-500 focus:border-steel-blue-400 focus:outline-none relative z-10"
      required
    />
  </div>
  
  <div>
    <label for="targetMarket" class="block text-sm font-medium mb-2">
      Target market (Optional)
    </label>
    <select
      id="targetMarket"
      value={data.targetMarket || ''}
      on:change={(e) => handleChange('targetMarket', e.currentTarget.value)}
      class="w-full px-4 py-3 bg-fortress-gray-800 border border-fortress-gray-700 text-off-white focus:border-steel-blue-400 focus:outline-none relative z-10"
    >
      <option value="">Select market type</option>
      {#each targetMarkets as market}
        <option value={market.value}>{market.label}</option>
      {/each}
    </select>
  </div>
</div>