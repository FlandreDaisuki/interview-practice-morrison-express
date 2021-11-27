import { ref, watch, onBeforeUnmount } from 'vue';


export const useMultipleSelection = (itemsModel) => {
  const itemElRefs = ref([]);

  const lastIndexWithShiftKey = ref(-1);
  const lastIndexWithoutShiftKey = ref(-1);

  const onClick = (event) => {
    const el = event.target;
    const index = itemElRefs.value.indexOf(el);
    if (event.shiftKey) {
      lastIndexWithShiftKey.value = index;
    } else {
      lastIndexWithoutShiftKey.value = index;
    }
  };

  const bindSelectionElRef = (el) => {
    if (el) {
      itemElRefs.value.push(el);
      el.addEventListener('click', onClick);
    }
  };

  onBeforeUnmount(() => {
    itemElRefs.value.forEach((el) => {
      el.removeEventListener('click', onClick);
    });
  });

  watch(lastIndexWithShiftKey, () => {
    if (lastIndexWithShiftKey.value < 0) { return; }
    if (lastIndexWithoutShiftKey.value < 0) { return; }

    // 以 shift 按住時點擊的 checked 為主：
    // 若有勾選，則中間的全部反選；若沒有勾選，則中間的全部勾選
    // 邏輯仿照 GitHub Notifications 頁面
    const checked = !itemsModel.value[lastIndexWithShiftKey.value].checked;

    const start = Math.min(lastIndexWithShiftKey.value, lastIndexWithoutShiftKey.value);
    const end = Math.max(lastIndexWithShiftKey.value, lastIndexWithoutShiftKey.value);
    for (let i = start; i <= end; i++) {
      itemsModel.value[i].checked = !itemsModel.value[i].disabled && checked;
    }
  });

  watch(lastIndexWithoutShiftKey, () => {
    lastIndexWithShiftKey.value = -1;
  });


  const selectAllTo = (checked) => {
    for (const item of itemsModel.value) {
      item.checked = !item.disabled && checked;
    }
    lastIndexWithShiftKey.value = -1;
    lastIndexWithoutShiftKey.value = -1;
  };

  return {
    bindSelectionElRef,
    selectAllTo,
  };
};
