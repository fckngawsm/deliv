import { OrderRepository } from "../../domain/repository/OrderRepository";

export class GetOrdersUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}
  static execute() {}
}
