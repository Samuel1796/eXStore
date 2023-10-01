import styles from '../../styles/styles.module.css'

const Gallery = () => {

    return (
        <div>
            <h1 className={styles.topperM}>Popular Games</h1>

            
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://picfiles.alphacoders.com/198/thumb-198637.jpg" alt=""></img>
            
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images3.alphacoders.com/885/885750.jpg" alt=""></img>
        </div>
        {/* <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""></img>
        </div> */}
    </div>
    
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images5.alphacoders.com/819/819012.jpg" alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://picfiles.alphacoders.com/574/thumb-574529.jpg" alt=""></img>
        </div>
        {/* <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""></img>
        </div> */}
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://picfiles.alphacoders.com/479/thumb-479583.jpg" alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://picfiles.alphacoders.com/421/thumb-421785.jpg" alt=""></img>
        </div>
        {/* <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""></img>
        </div> */}
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://picfiles.alphacoders.com/241/thumb-241885.jpg" alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://picfiles.alphacoders.com/556/thumb-556163.jpg" alt=""></img>
        </div>
        {/* <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""></img>
        </div> */}
    </div>
</div>

        </div>
    )
}

export default Gallery;