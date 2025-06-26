<script lang="ts">
  export let data: any = {};
  export let updateData: (newData: any) => void;
  
  const handleChange = (field: string, value: any) => {
    updateData({ [field]: value });
  };
</script>

<div class="space-y-6">
  <div>
    <h2 class="text-2xl font-bold mb-2">Step 6: What Does Success Look Like?</h2>
    <p class="text-stone-gray-400">What does a successful engagement with Bastion look like for you?</p>
  </div>
  
  <div>
    <label for="success" class="block text-sm font-medium mb-2">
      Define success for this project <span class="text-steel-blue-400">*</span>
    </label>
    <textarea
      id="success"
      value={data.success || ''}
      on:input={(e) => handleChange('success', e.currentTarget.value)}
      placeholder="Example: A working MVP that I can demo to investors, with clean code I can hand off to a future team. Need it to handle 1000 users without breaking..."
      rows="4"
      class="w-full px-4 py-3 bg-fortress-gray-800 border border-fortress-gray-700 text-off-white placeholder-stone-gray-500 focus:border-steel-blue-400 focus:outline-none relative z-10"
      required
    />
  </div>
  
  <div class="bg-fortress-gray-800 p-4 border border-fortress-gray-700">
    <p class="text-sm text-stone-gray-400">
      <strong>Pro tip:</strong> The more specific you are here, the better we can scope your project and deliver exactly what you need.
    </p>
  </div>
</div>