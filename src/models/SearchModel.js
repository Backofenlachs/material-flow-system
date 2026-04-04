
/**
 * 
 */
export class SearchModel {

  constructor(mockData = []) {
    this.rawData = mockData; // Backend simulation || Bakcend / original daten
    this.currentData = mockData; // aktuelle Daten die gefiltert ode sortiert werden

  }

  getCurrentData() {
    return this.currentData;
  }

  /**
   * Hier kommt später
   * @param {string} searchTerm 
   */
  fetchMaterials(searchTerm = "") {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    if(!normalizedTerm) {
      this.currentData = this.rawData;
      return this.getCurrentData();
    }

    this.currentData = this.rawData.filter((mat) => {
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
    return this.currentData.filter(predicateFn);
  }

  sortCurrentData(compareFn) {
    return [...this.currentData].sort(compareFn);
  }
}