import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";

const ProductDetailes = () => {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const { datas } = useFetch(`/products/${id}`);
  useEffect(() => {
    scrollTo(0, 0);
  }, [id]);

  const INC = () => {
    setCount(count + 1);
  };
  const DEC = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="continer m-auto grid grid-cols-3 gap-4 py-5">
        <div>
          <img className="" src={datas?.images[index]} />
          <div className="flex gap-2">
            {datas?.images?.map((item, inx) => (
              <img
                src={item}
                onClick={() => setIndex(inx)}
                key={inx}
                className="w-16"
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl">{datas?.title}</h1>
          <strong className="text-4xl">{datas?.price}USD</strong>
          <p>{datas?.description}</p>
          <div className="flex">
            <button
              onClick={DEC}
              className="bg-blue-500 w-[35px] rounded-[5px]"
            >
              -
            </button>
            <h1 className="p-2">{count}</h1>
            <button
              onClick={INC}
              className="bg-blue-500 w-[35px] rounded-[5px]"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <p className="text-4xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          amet repellat, accusantium cum iusto architecto a recusandae eveniet
          alias veniam ipsam corrupti commodi necessitatibus rem rerum officiis
          fugiat aspernatur. Magni, repudiandae deleniti. Nostrum porro aperiam
          adipisci quasi eius, labore consectetur nulla veritatis suscipit, et
          eveniet? Sit iste placeat magni exercitationem totam blanditiis
          beatae, fugit vel, temporibus voluptates nesciunt? Id natus neque
          animi fugit deserunt officia, exercitationem deleniti? Voluptas eius
          aspernatur nihil magnam consequuntur. Qui deleniti officia cumque
          laborum quo, maiores voluptas eum reprehenderit omnis ipsam iure? Id
          perferendis magni pariatur obcaecati commodi quidem vitae nemo facilis
          corporis suscipit dolor, maiores, sapiente enim dolorum molestiae
          assumenda error magnam! Natus quo facilis deleniti eum, nobis
          reiciendis repellendus nisi fuga? Velit vitae officia necessitatibus
          consectetur quas exercitationem ratione et, commodi ipsum corporis hic
          quos quam iste esse deserunt obcaecati culpa recusandae quasi
          provident ullam cupiditate sint quis? Animi error nam reiciendis fugit
          voluptatibus, quibusdam eius hic autem rerum vitae dolores eveniet
          voluptatum nostrum provident similique deleniti dicta totam quisquam
          distinctio facere! Ipsa explicabo vitae minus? Atque numquam harum
          distinctio facere at similique repellat laudantium voluptatum
          doloremque? Nam ex blanditiis ab at recusandae libero error provident
          laboriosam animi incidunt quo sit laborum soluta praesentium vero quia
          exercitationem debitis nihil, similique corrupti distinctio!
          Asperiores placeat rerum ratione animi amet nemo perspiciatis
          laboriosam, unde temporibus corporis, debitis omnis aperiam labore
          quos iusto quia inventore quaerat molestias cumque dolores nobis quam
          veniam et? Iusto eveniet adipisci nulla facere minima aliquid animi
          doloribus? Corrupti rerum odio minima odit, possimus nulla! Nam ipsam
          repellat eveniet vitae eligendi. Asperiores eum odit aliquam mollitia
          fuga corporis! Exercitationem earum, eveniet deleniti, voluptas quo
          qui quos inventore voluptatum nihil id quod quis doloremque rem
          dolorum. Perferendis in nesciunt aliquid reiciendis, laborum id
          aliquam omnis ipsum sapiente delectus, cupiditate suscipit ratione
          nostrum eveniet at! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ab autem quae repudiandae dolorum minima quaerat aliquid magni
          quibusdam porro earum veniam doloribus ex nemo tempore, et illum vitae
          est beatae velit laudantium eum saepe deserunt nihil. Error culpa
          eveniet quis et aliquam eos ipsa laudantium vitae ex libero vel
          delectus ullam vero ipsam quam commodi ratione numquam totam, illo
          accusantium? Natus doloribus dicta iure reprehenderit aliquam libero
          minus similique itaque, adipisci veritatis. Nihil dolore error sequi
          sunt amet nobis quam molestias sint eaque atque aperiam nostrum ipsa
          ratione neque, asperiores voluptatum hic incidunt maxime. Consequatur
          accusamus sit quae. Provident magnam, laborum eos facilis dolorum
          eveniet excepturi facere minima aut dolorem deleniti asperiores modi
          vero voluptate! Asperiores veniam, tempora laudantium eius, facilis
          harum eos voluptates perferendis iusto aliquam voluptatum consequuntur
          neque itaque necessitatibus? Id exercitationem consequuntur, provident
          voluptate hic omnis molestiae ut nisi eligendi laborum veniam beatae
          quae odit adipisci laudantium natus recusandae sunt ipsa tempora
          deserunt non quia rerum maxime? Pariatur quod ab natus ratione odit,
          eveniet excepturi assumenda quibusdam sequi suscipit illo vero placeat
          eius ut. Itaque reiciendis vel error voluptatem modi dignissimos
          perspiciatis quos? Suscipit ducimus aspernatur perferendis? Libero cum
          ullam quae, id magni fuga ex voluptas nulla!
        </p>
      </div>
    </>
  );
};

export default ProductDetailes;
