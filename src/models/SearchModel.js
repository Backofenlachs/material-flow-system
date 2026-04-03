
/**
 * 
 */
export class SearchModel {
  constructor(mockData = []) {
    this.lastFetchedData = mockData;
    // this.materials = mockData;
    this.dataSource = mockData; // Backend simulation

    console.log("createt SearchModel: Data = ", this.materials);

  }

  getCurrentData() {
    return this.lastFetchedData;
  }

  /**
   * Hier kommt später
   * @param {string} searchTerm 
   */
  fetchMaterials(searchTerm = "") {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    if(!normalizedTerm) {
      this.lastFetchedData = this.dataSource;
      return this.getCurrentData();
    }

    this.lastFetchedData = this.dataSource.filter((mat) => {
      const name = mat.name?.toLowerCase() || "";
      const storage = mat.storage?.toLowerCase() || "";
      const stock = String(mat.stock ?? "");

      return (
        name.includes(normalizedTerm) ||
        storage.includes(normalizedTerm) ||
        stock.includes(normalizedTerm)
      );
    });

    return this.getCurrentData();  
  }

  // Mögliche Filter methoden
  filterCurrentData(predicateFn) {
    return this.lastFetchedData.filter(predicateFn);
  }

  sortCurrentData(compareFn) {
    return [...this.lastFetchedData].sort(compareFn);
  }




/*
  search(searchTerm) {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    if(!normalizedTerm) {
      this.materials = this.mockData;
      return ;
    }

    this.materials =  this.mockData.filter((mat) => {
      const name = mat.name?.toLowerCase() || "";
      const storage = mat.storage?.toLowerCase() || "";
      const stock = String(mat.stock ?? "");

      return (
        name.includes(normalizedTerm) ||
        storage.includes(normalizedTerm) ||
        stock.includes(normalizedTerm)
      );
    });
  }
  */

}