class dtoResponse {
    constructor(total, page, pageSize, data) {
      this.Total = total;
      this.Page = page;
      this.PageSize = pageSize;
      this.Data = data;
    }
  
    // Method to get property details
    getDetails() {
      return `Total: ${this.Total}, Page: ${this.Page},PageSize: ${this.PageSize}, Data: $${this.Data}`;
    }
  
    // Method to update price
    updateData(data) {
      this.Data = data;
    }
  }