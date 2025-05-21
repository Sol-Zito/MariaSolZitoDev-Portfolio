import { useEffect, useState } from "react";

export const ModalPop = () => {
  const [open, onClose] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      onClose(true);
    }, 1 * 60 * 1000);

    return () => clearInterval(intervalo); // Limpia el intervalo al desmontar el componente
  }, []);
  return (
    <>
      {open ? (
        <div className="relative z-10" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white border border-cardB text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <p className="text-black">
                        Project worked with react, javascript, and styles with
                        tailwind css.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-cardB px-4 py-3">
                  <button
                    type="button"
                    className="mt-3 w-full rounded-md bg-white px-3 py-2 font-semibold text-black shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-footer"
                    onClick={() => onClose(!open)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};
