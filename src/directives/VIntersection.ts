export default {
    mounted(el: HTMLDivElement, binding: {value: () => void}) {

        const options = {
            rootMarging: '0px',
            threshold: 1.0
          }
      
      
          const callback = (entries: any[]) => {
            if (entries[0].isIntersecting) {
              binding.value()
            }
          };
      
          new IntersectionObserver(callback, options).observe(el)
    },
    name: 'intersection'
}