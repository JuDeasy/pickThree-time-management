const $btn_form = document.querySelector('#btn_form');

let value_array = [];

$btn_form.addEventListener('click', (event) => {
  event.preventDefault();
  let $pick_time = document.querySelector('#pick_time');
  let $pick_list1 = document.querySelector('#pick_list1');
  let $pick_list2 = document.querySelector('#pick_list2');
  let $pick_list3 = document.querySelector('#pick_list3');
  let $memo = document.querySelector('#memo');

  let value_object = {
    Date: $pick_time.value,
    List1: $pick_list1.value,
    List2: $pick_list2.value,
    List3: $pick_list3.value,
    Memo: $memo.value,
  };

  //pust Object into array
  value_array.push(value_object);

  //make rows and columns and insert values
  let row = table.insertRow(document.getElementsByTagName('tr').length);
  let cell_1 = row.insertCell(0);
  cell_1.textContent = value_object.Date;
  let cell_2 = row.insertCell(1);
  cell_2.textContent = value_object.List1;
  let cell_3 = row.insertCell(2);
  cell_3.textContent = value_object.List2;
  let cell_4 = row.insertCell(3);
  cell_4.textContent = value_object.List3;
  let cell_5 = row.insertCell(4);
  cell_5.textContent = value_object.Memo;
  console.log(value_array);
});

JSON.stringify(value_array);
