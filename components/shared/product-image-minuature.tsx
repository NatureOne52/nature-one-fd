import { useRouter } from "next/navigation";


interface ProductImageMiniatureProsps{
    slug:string,
    url:string
}

const ProductImageMiniature = (props:ProductImageMiniatureProsps) =>{
    const {slug, url} = props
    const router = useRouter()


    return(
        <div onClick={()=> router.push(`/product/${slug}`)}>
            <img src={`${url}`}
             alt="Product" 
             className="w-24 h-24 overflow-hidden rounded-3xl sm:w-auto sm:h-32 "
             />

        </div> 
    );
}

export default ProductImageMiniature;