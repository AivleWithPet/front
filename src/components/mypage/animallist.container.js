import React from "react";

export default function AnimalListView({ selectedItem }) {
  // pet/{pet_id}로 통신하면 됨
  return (
    <div>
      {selectedItem && (
        <div>{selectedItem} 선택된 반려동물의 정보를 보여주는 컴포넌트</div>
      )}
    </div>
  );
}
