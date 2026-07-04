import { ref, watch } from "vue"
import { defineStore } from "pinia"
import axios from "axios"
import { locale } from "../i18n/index.js"

export const useOverallStore = defineStore('overall', () => {
  const home = ref(null)
  const category = ref(null)
  const product = ref(null)
  const products = ref([])
  const productsTotal = ref(0)
  const productsLoading = ref(false)

  // Track in-flight requests so duplicate concurrent calls (e.g. HomePage and
  // ProductsSection both mounting) reuse the same promise instead of refetching.
  let homePromise = null
  let categoryPromise = null
  // Remember the product being viewed so a language switch can refetch it.
  let currentProductId = null
  // Remember the last catalog query (whichever endpoint) so a language switch
  // can replay it. Holds a thunk that re-runs the exact same request.
  let lastProductsFetch = null

  function getHome() {
    if (homePromise) return homePromise
    homePromise = (async () => {
      try {
        const response = await axios.get("https://caravanchicken.uz/api/home", {
          params: { lang: locale.value, limit_per_category: 5 },
        })
        if (response.data != null) {
          home.value = response.data;
        } else {
          notFound();
        }
      } catch (error) {
        console.log("error", error.message)
      } finally {
        homePromise = null
      }
    })()
    return homePromise
  }


  function getCategories() {
    if (categoryPromise) return categoryPromise
    categoryPromise = (async () => {
      try {
        const response = await axios.get("https://caravanchicken.uz/api/categories", {
          params: { lang: locale.value }
        })
        if (response.data != null) {
          category.value = response.data;
        } else {
          notFound();
        }
      } catch (error) {
        console.log("error", error.message)
      } finally {
        categoryPromise = null
      }
    })()
    return categoryPromise
  }


  async function getProduct(id) {
    currentProductId = id
    product.value = null
    try {
      const response = await axios.get(`https://caravanchicken.uz/api/products/${id}`, {
        params: { lang: locale.value },
      })
      if (response.data != null) {
        product.value = response.data;
      } else {
        notFound();
      }
    } catch (error) {
      console.log("error", error.message)
    }
  }


  // Catalog list with optional category / search / pagination filters.
  async function getProducts({ category_id, search, skip = 0, limit = 20 } = {}) {
    lastProductsFetch = () => getProducts({ category_id, search, skip, limit })
    productsLoading.value = true
    try {
      const response = await axios.get("https://caravanchicken.uz/api/products", {
        params: { lang: locale.value, category_id, search, skip, limit },
      })
      if (response.data != null) {
        products.value = response.data.items || []
        productsTotal.value = response.data.total || 0
      } else {
        notFound();
      }
    } catch (error) {
      console.log("error", error.message)
    } finally {
      productsLoading.value = false
    }
  }


  // Products belonging to a single category (dedicated endpoint).
  async function getCategoryProducts(categoryId, { skip = 0, limit = 20 } = {}) {
    lastProductsFetch = () => getCategoryProducts(categoryId, { skip, limit })
    productsLoading.value = true
    try {
      const response = await axios.get(`https://caravanchicken.uz/api/categories/${categoryId}/products`, {
        params: { lang: locale.value, skip, limit },
      })
      if (response.data != null) {
        products.value = response.data.items || []
        productsTotal.value = response.data.total || 0
      } else {
        notFound();
      }
    } catch (error) {
      console.log("error", error.message)
    } finally {
      productsLoading.value = false
    }
  }


  function notFound() {
    console.log("data mavjud emasu");
  }

  // Refetch localized data whenever the active language changes.
  watch(locale, () => {
    getHome()
    getCategories()
    if (currentProductId != null) getProduct(currentProductId)
    if (lastProductsFetch != null) lastProductsFetch()
  })

  return {
    home, getHome,
    category, getCategories,
    product, getProduct,
    products, productsTotal, productsLoading, getProducts, getCategoryProducts,
  }
})