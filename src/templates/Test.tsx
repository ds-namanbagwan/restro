/* eslint-disable react/prop-types */
import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
  TemplateConfig,
} from "@yext/pages";

import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import classNames from "classnames";


export const config: TemplateConfig = {
  stream: {
    $id: "beverage",
    fields: [
      "name",
      "question",
      "answer",
      "slug",
    ],
    filter: {
      entityTypes: ["faq"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = () => {
    return "test.html";
  };
  

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  props
): HeadConfig => {
  return {
    title: `Toast | ${props.document.name}`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Beverage: Template<TemplateRenderProps> = ({ document }) => {
  const {
    name,
    question,
    answer,
   
  } = document;

  const [showToast, setShowToast] = useState(false);
 


 

  const showToastMessage = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };



  return (
    <>
    <div>
        {name}
    </div>
    </>
  );
};

export default Beverage;