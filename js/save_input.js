const $btn_form = document.querySelector('#btn_form');
// const value_object = {
//   Date: null,
//   List1: null,
//   List2: null,
//   List3: null,
//   Memo: null,
// };

$btn_form.addEventListener('click', (event) => {
  event.preventDefault();
  let $pick_time = document.querySelector('#pick_time');
  let $pick_list1 = document.querySelector('#pick_list1');
  let $pick_list2 = document.querySelector('#pick_list2');
  let $pick_list3 = document.querySelector('#pick_list3');
  let $memo = document.querySelector('#memo');

  const value_object = {
    Date: $pick_time.value,
    List1: $pick_list1.value,
    List2: $pick_list2.value,
    List3: $pick_list3.value,
    Memo: $memo.value,
  };
  console.log(value_object);
});
