<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <Task 
      v-for="(task, index) in tasks" 
      :key="task.name" 
      @taskStateChanged="$emit('taskStateChanged', index)"
      @taskDeleted="$emit('taskDeleted', index)" 
      :task="task" />
    </template>
    <p v-else class="no-task">Sua vida está em dia :) </p>
  </div>
</template>

<script>

import Task from './Task'

export default {
  components: { Task },
  props: {
    tasks: { type: Array, required: true }
  }
};

</script>

<style scoped>
  
  .task-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .task-grid .task {
    margin: 10px;
  }

  .no-task {
    color: #AAA;
    font-size: 1.5rem;
  }

</style>
