<template>
  <main>
    <header>Hook Problem: multiple select with shift key</header>
    <section>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" @change="onSelectAllChange"/>
            </th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in listItems"
            :key="item.id"
            @click="onClickListItems"
          >
            <td>
              <input
                type="checkbox"
                v-model="item.checked"
                :disabled="item.disabled"
                :ref="bindSelectionElRef"
              />
            </td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
      <div class="output">{{ selectedItemsDisplay }}</div>
    </section>
  </main>
</template>

<script>
import { ref, computed } from 'vue';
import { useMultipleSelection } from '../hooks/multipleSelection';

export default {
  name: 'HookProblem',
  setup() {
    const getDisabled = () => Math.random() < 0.3;

    const listItems = ref([
      { id: 'a', name: 'aoremz', checked: false, disabled: getDisabled() },
      { id: 'b', name: 'bpsumy', checked: false, disabled: getDisabled() },
      { id: 'c', name: 'colorx', checked: false, disabled: false },
      { id: 'd', name: 'donsct', checked: false, disabled: getDisabled() },
      { id: 'e', name: 'ernare', checked: false, disabled: getDisabled() },
      { id: 'f', name: 'fursus', checked: false, disabled: getDisabled() },
      { id: 'g', name: 'gurusw', checked: false, disabled: getDisabled() },
      { id: 'h', name: 'hellus', checked: false, disabled: getDisabled() },
      { id: 'i', name: 'iustop', checked: false, disabled: getDisabled() },
      { id: 'j', name: 'jtiamk', checked: false, disabled: getDisabled() },
      { id: 'k', name: 'koremj', checked: false, disabled: true },
      { id: 'l', name: 'lnibhg', checked: false, disabled: getDisabled() },
      { id: 'm', name: 'mhoncs', checked: false, disabled: getDisabled() },
    ]);

    const { bindSelectionElRef, selectAllTo } = useMultipleSelection (listItems);

    const selectedItemsDisplay = computed(() => {
      return (
        listItems.value
          .filter((it) => it.checked)
          .map((it) => it.name)
          .join(', ') || 'no selection'
      );
    });

    const onSelectAllChange = (event) => {
      selectAllTo(event.target.checked);
    };

    return {
      listItems,
      selectedItemsDisplay,
      bindSelectionElRef,
      onSelectAllChange,
    };
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
main {
  height: 100%;
}

table {
  margin: 1rem;
  border-collapse: collapse;
}
table tr :where(th, td) {
  border: 1px solid lightgray;
  padding: 4px 12px;
}
table tr :where(th, td):first-child {
  padding: 4px;
}
table thead tr {
  background-color: lightsteelblue;
  color: darkblue;
}
table tbody tr:nth-child(odd) {
  background-color: aliceblue;
}
</style>
