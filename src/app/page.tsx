import React, { useEffect, useRef, useState } from 'react';
import "primereact/resources/themes/lara-light-blue/theme.css";
import { TabMenu } from 'primereact/tabmenu';
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {ProductService} from "@/service/ProductService";

const [products, setProducts] = useState(null);
const items = [
  { label: 'Dashboard', icon: 'pi pi-home' },
  { label: 'Transactions', icon: 'pi pi-chart-line' },
  { label: 'Products', icon: 'pi pi-list' },
  { label: 'Messages', icon: 'pi pi-inbox' }
];

useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data as any));
}, []);

const header = (
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
);
const footer = (
    <>
        <Button label="Save" icon="pi pi-check" />
        <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
    </>
);

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="card">
        <TabMenu model={items} />
          <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
              <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                  numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
              </p>
          </Card>
      </div>

    </div>
  );
}
