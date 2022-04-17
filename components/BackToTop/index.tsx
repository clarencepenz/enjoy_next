import React, { useEffect, useState } from "react";


const BacktoTop = () => {
  const [show, setShow] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    window.pageYOffset > 200 ? setShow(true) : setShow(false);

    window.addEventListener("scroll", () => {
      window.pageYOffset > 200 ? setShow(true) : setShow(false);
    });
  }, []);
  return (
    <>
      {show && (
        <a
          href="#"
          className="back-to-top"
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
          <i className="fa fa-angle-up"></i>
        </a>
      )}
    </>
  );
};

export default BacktoTop;
