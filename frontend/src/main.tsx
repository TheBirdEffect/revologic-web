import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RootStoreProvider } from "./context/RootStoreContext.tsx";
import { RootStore } from "./dataLayer/stores/RootStore.ts";
import { newCards, newDemo } from "./dataLayer/demoData/demoDataSections.ts";
import { demoImages } from "./dataLayer/demoData/images.ts";
import { demoImageGalleries } from "./dataLayer/demoData/imageGallery.ts";

const useContext = RootStore.create({
  contentStore: {
    sections: newDemo.sections,
    cards: newCards,
  },
  imageStore: {
    images: demoImages.images,
    galleryModel: demoImageGalleries.gallery,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootStoreProvider value={useContext}>
      <App />
    </RootStoreProvider>
  </StrictMode>
);
