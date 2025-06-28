import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentService } from 'src/app/services/document.service';
import { SignatureService } from 'src/app/services/signature.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userEmail: string = '';
  selectedFile: File | null = null;

  // Propriedade para guardar a lista de documentos para a tabela
  documents: any[] = [];
  // Define as colunas que a tabela irá exibir e a ordem delas
  displayedColumns: string[] = ['fileName', 'uploadDate', 'actions'];

  constructor(
    private authService: AuthService,
    private documentService: DocumentService,
    private signatureService: SignatureService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const decodedToken = this.authService.getDecodedToken();
    if (decodedToken && decodedToken.sub) {
      this.userEmail = decodedToken.sub;
    }
    this.loadDocuments(); // Carrega os documentos ao iniciar
  }

  loadDocuments(): void {
    this.documentService.getMyDocuments().subscribe({
      next: (docs) => {
        this.documents = docs; // Atualiza nossa propriedade com os dados da API
        console.log('Documentos carregados:', this.documents);
      },
      error: (err) => {
        console.error('Erro ao buscar documentos!', err);
      }
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onUpload(): void {
    if (!this.selectedFile) {
      alert("Por favor, selecione um arquivo primeiro.");
      return;
    }

    this.documentService.upload(this.selectedFile).subscribe({
      next: (response) => {
        console.log('Upload bem-sucedido!', response);
        alert(`Documento '${response.fileName}' enviado com sucesso!`);
        this.selectedFile = null;
        this.loadDocuments(); // Recarrega a lista após o sucesso do upload
      },
      error: (err) => {
        console.error('Erro no upload!', err);
        alert('Falha no upload do documento.');
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

 signDocument(documentId: string): void {
    console.log('Tentando assinar o documento:', documentId);

    this.signatureService.signDocument(documentId).subscribe({
      next: (response) => {
        console.log('Documento assinado com sucesso!', response);
        alert(`Documento assinado! ID da assinatura: ${response.signatureId}`);
        // TODO: Poderíamos atualizar a UI para mostrar que o documento foi assinado
      },
      error: (err) => {
        console.error('Erro ao assinar o documento!', err);
        alert('Falha ao assinar o documento.');
      }
    });
  }
}