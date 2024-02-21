const useScroll = (myRef) => {
    const executeScroll = () => {
        myRef.current.scrollIntoView();
    }
    return { executeScroll };
};

export default useScroll;