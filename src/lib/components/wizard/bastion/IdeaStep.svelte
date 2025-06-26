<script lang="ts">
  export let data: any = {};
  export let updateData: (newData: any) => void;
  
  const handleChange = (field: string, value: any) => {
    updateData({ [field]: value });
  };
</script>

<div class="space-y-6">
  <div>
    <h2 class="text-2xl font-bold mb-2">Step 1: The Idea</h2>
    <p class="text-stone-gray-400">Tell us what you're building — elevator pitch-style.</p>
  </div>
  
  <div>
    <label for="idea" class="block text-sm font-medium mb-2">
      What's your product idea? <span class="text-steel-blue-400">*</span>
    </label>
    <textarea
      id="idea"
      value={data.idea || ''}
      on:input={(e) => handleChange('idea', e.currentTarget.value)}
      placeholder="Example: A mobile app that helps contractors track job site progress with AI-powered photo analysis..."
      rows="4"
      class="w-full px-4 py-3 bg-fortress-gray-800 border border-fortress-gray-700 text-off-white placeholder-stone-gray-500 focus:border-steel-blue-400 focus:outline-none relative z-10"
      required
    />
  </div>
  
  <div>
    <label for="deck" class="block text-sm font-medium mb-2">
      Have a deck or brief? (Optional)
    </label>
    <input
      type="file"
      id="deck"
      accept=".pdf,.ppt,.pptx,.doc,.docx"
      on:change={(e) => handleChange('deck', e.currentTarget.files?.[0])}
      class="w-full px-4 py-3 bg-fortress-gray-800 border border-fortress-gray-700 text-off-white file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-steel-blue-600 file:text-off-white hover:file:bg-steel-blue-700 relative z-10"
    />
    <p class="text-xs text-stone-gray-500 mt-1">PDF, PPT, or DOC files up to 10MB</p>
  </div>
</div>