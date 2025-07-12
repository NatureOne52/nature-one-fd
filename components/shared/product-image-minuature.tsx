import Image from 'next/image'
import { useRouter } from "next/navigation";

interface ProductImageMiniatureProps {
  slug: string;
  url: string;
}

const ProductImageMiniature = (props: ProductImageMiniatureProps) => {
  const { slug, url } = props;
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/product/${slug}`)} className="cursor-pointer">
      <Image
        src={url}
        alt="Product"
        width={96}    // 24 * 4 px = 96px, ajusta según necesites
        height={96}   // idem
        className="rounded-3xl sm:w-auto sm:h-32 overflow-hidden"
        sizes="(min-width: 640px) 128px, 96px"
      />
    </div>
  );
}

export default ProductImageMiniature;
