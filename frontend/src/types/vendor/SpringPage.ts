/**
 * Definição do tipo SpringPage, que representa uma página paginada retornada por consultas Spring Data.
 *
 * @template T - O tipo genérico associado, que pode ser, por exemplo, 'Product', 'Category', etc.
 *
 * @property content - Array dos elementos da página.
 * @property last - Indica se é a última página.
 * @property totalElements - O número total de elementos em todas as páginas.
 * @property totalPages - O número total de páginas.
 * @property size - O tamanho da página.
 * @property number - O número da página.
 * @property first - Indica se é a primeira página.
 * @property numberOfElements - (Opcional) O número de elementos nesta página.
 * @property empty - Indica se a página está vazia.
 *
 * Exemplo de uso: `SpringPage<Product>` para uma página paginada de produtos.
 */
export type SpringPage<T> = {
    content: T[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty: boolean;
};
