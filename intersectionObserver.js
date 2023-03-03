const about  = document.querySelector('.about .text')
const duisburg  = document.querySelector('.duisburg .text')

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry=>{
            entry.target.classList.toggle("show", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
    {threshold: 0.5}
)

observer.observe(about)
observer.observe(duisburg)