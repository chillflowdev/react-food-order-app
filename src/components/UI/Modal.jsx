import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  // open이 true일 때만 실행.
  useEffect(() => {
    // 항상 같은 값이 사용되어질 수 있도록 위에서 초기화할 것.
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  // 순간이동 포털을 열어서 그곳에 다이얼로그를 달아준다.
  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
