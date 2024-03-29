import { useState, useEffect } from "react";

export default function useScroll() {

    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bodyOffset, setBodyOffset] = useState(
      typeof window === "undefined" || !window.document ? 0 : document.body.getBoundingClientRect()
    );
    const [scrollY, setScrollY] = useState(bodyOffset.top);
    const [scrollX, setScrollX] = useState(bodyOffset.left);
    const [scrollDirection, setScrollDirection] = useState();
  
    const listener = e => {
      setBodyOffset(typeof window === "undefined" || !window.document ? 0 : document.body.getBoundingClientRect());
      setScrollY(-bodyOffset.top);
      setScrollX(bodyOffset.left);
      setScrollDirection(lastScrollTop > -bodyOffset.top ? "up" : "down");
      setLastScrollTop(-bodyOffset.top);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    });
  
    return {
      setScrollY,
      scrollY,
      scrollX,
      scrollDirection
    };
  }