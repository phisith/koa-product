import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const createProduct = async (ctx, next) => {
  const product = ctx.request.body?.product;
  if (product) {
    const productResult = await prisma.product.create({
      data: {
        ...product,
      },
    });
    ctx.body = productResult;
  } else {
    ctx.body = `Please provide product to create,
    ex: {"product": {"name": "Something", "description": "Something"}}`;
  }
};

export const getProduct = async (ctx, next) => {
  const id = ctx.request.query?.id;
  if (id) {
    const product = await prisma.product.findMany({
      where: { id: Number(id) },
    });
    ctx.body = product;
  } else {
    ctx.body = "Please provide id for view product detail";
  }
};

export const getProducts = async (ctx, next) => {
  try {
    const products = await prisma.product.findMany();
    ctx.body = products;
  } catch (err) {
    ctx.body = "Something went wrong!";
  }
};

export const updateProduct = async (ctx, next) => {
  const id = ctx.params?.id;
  const product = ctx.request.body?.product;
  if (id && product) {
    const productResult = await prisma.product.update({
      where: { id: Number(id) },
      data: {
        ...product,
      },
    });
    ctx.body = productResult;
  } else {
    ctx.body = "Please provide id and detail to update";
  }
};

export const deleteProduct = async (ctx, next) => {
  const id = ctx.params?.id;
  if (id) {
    try {
      const productResult = await prisma.product.delete({
        where: { id: Number(id) },
      });
      ctx.body = productResult;
    } catch (err) {
      ctx.body = "id is not Exit";
    }
  } else {
    ctx.body = "Please provide id to delete";
  }
};
